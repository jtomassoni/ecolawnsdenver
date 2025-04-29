import os
from PIL import Image
import requests
from io import BytesIO

# Create directories if they don't exist
os.makedirs('public/images/services', exist_ok=True)
os.makedirs('public/images/icons', exist_ok=True)
os.makedirs('public/images/steps', exist_ok=True)

# Image definitions
images = {
    'hero': {
        'path': 'public/images/hero.jpg',
        'url': 'https://picsum.photos/2000/1200',
        'size': (2000, 1200)
    },
    'services': {
        'lawn-mowing': {
            'path': 'public/images/services/lawn-mowing.jpg',
            'url': 'https://picsum.photos/500/300?random=1',
            'size': (500, 300)
        },
        'spring-cleanup': {
            'path': 'public/images/services/spring-cleanup.jpg',
            'url': 'https://picsum.photos/500/300?random=2',
            'size': (500, 300)
        },
        'fall-cleanup': {
            'path': 'public/images/services/fall-cleanup.jpg',
            'url': 'https://picsum.photos/500/300?random=3',
            'size': (500, 300)
        },
        'landscaping': {
            'path': 'public/images/services/landscaping.jpg',
            'url': 'https://picsum.photos/500/300?random=4',
            'size': (500, 300)
        },
        'irrigation': {
            'path': 'public/images/services/irrigation.jpg',
            'url': 'https://picsum.photos/500/300?random=5',
            'size': (500, 300)
        },
        'tree-care': {
            'path': 'public/images/services/tree-care.jpg',
            'url': 'https://picsum.photos/500/300?random=6',
            'size': (500, 300)
        }
    },
    'icons': {
        'google-review': {
            'path': 'public/images/icons/google-review.png',
            'url': 'https://placehold.co/64x64/4285F4/FFFFFF/png?text=4.9★',
            'size': (64, 64)
        },
        'happy-customers': {
            'path': 'public/images/icons/happy-customers.png',
            'url': 'https://placehold.co/64x64/22C55E/FFFFFF/png?text=2K+',
            'size': (64, 64)
        }
    },
    'steps': {
        'step-1': {
            'path': 'public/images/steps/step-1.png',
            'url': 'https://placehold.co/128x128/22C55E/FFFFFF/png?text=1',
            'size': (128, 128)
        },
        'step-2': {
            'path': 'public/images/steps/step-2.png',
            'url': 'https://placehold.co/128x128/22C55E/FFFFFF/png?text=2',
            'size': (128, 128)
        },
        'step-3': {
            'path': 'public/images/steps/step-3.png',
            'url': 'https://placehold.co/128x128/22C55E/FFFFFF/png?text=3',
            'size': (128, 128)
        },
        'step-4': {
            'path': 'public/images/steps/step-4.png',
            'url': 'https://placehold.co/128x128/22C55E/FFFFFF/png?text=4',
            'size': (128, 128)
        }
    }
}

def download_image(url, output_path, size=None):
    """
    Download an image from a URL and optionally resize it.
    """
    try:
        response = requests.get(url)
        img = Image.open(BytesIO(response.content))
        
        if size:
            img = img.resize(size, Image.Resampling.LANCZOS)
        
        img.save(output_path)
        print(f"Downloaded image: {output_path}")
    except Exception as e:
        print(f"Error downloading image for {output_path}: {str(e)}")

def main():
    # Download hero image
    download_image(
        images['hero']['url'],
        images['hero']['path'],
        images['hero']['size']
    )

    # Download service images
    for service, details in images['services'].items():
        download_image(
            details['url'],
            details['path'],
            details['size']
        )

    # Download icon images
    for icon, details in images['icons'].items():
        download_image(
            details['url'],
            details['path'],
            details['size']
        )

    # Download step images
    for step, details in images['steps'].items():
        download_image(
            details['url'],
            details['path'],
            details['size']
        )

if __name__ == '__main__':
    main() 